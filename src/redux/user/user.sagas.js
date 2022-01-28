import { takeLatest, put, all, call } from "redux-saga/effects";
import { signInSuccess, signInFail, signOutSuccess, signOutFail, signUpFail, signUpSuccess } from "./user.actions";
import { UserActionTypes } from "./user.types";
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";


export function* getSnapshotFromUserAuth(user, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData) // for saving in firestore
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })) //for saving in state
    } catch (e) {
        yield put(signInFail(e))
    }
}

export function* SignInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield call(getSnapshotFromUserAuth, user)

    } catch (e) {
        yield put(signInFail(e))
    }
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

    //     if (userAuth) {
    //       const userRef = await createUserProfileDocument(userAuth) // for saving in firestore

    //       console.log("USER ", userRef)
    //       userRef.onSnapshot(snapshot => { //for saving in state
    //         console.log('snapshot ', snapshot.data())
    //         setCurrentUser({ id: snapshot.id, ...snapshot.data() })

    //       })
    //     }
    //     else
    //       setCurrentUser(userAuth)

    //   })
}

export function* SignInWithEmail(action) {
    try {
        const { email, password } = action.payload
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield call(getSnapshotFromUserAuth, user)
    } catch (e) {
        yield put(signInFail(e))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth)
            return
        else
            yield call(getSnapshotFromUserAuth, userAuth)
    } catch (e) {
        yield put(signInFail(e))
    }
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (e) {
        yield put(signOutFail(e))
    }
}

export function* signUp(action) {
    try {
        const { email, password, displayName } = action.payload
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        //yield call(createUserProfileDocument, user, { displayName })
        yield call(getSnapshotFromUserAuth, user, { displayName })
        yield put(signUpSuccess())
    } catch (e) {
        yield put(signUpFail(e))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, SignInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, SignInWithEmail)
    // console.log("action", action)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignOutStart),
    call(onSignUpStart)])
}

