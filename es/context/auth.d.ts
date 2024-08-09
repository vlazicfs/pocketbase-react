import * as React from 'react';
export type AuthProviderInfo = {
    name: string;
    state: string;
    codeVerifier: string;
    codeChallenge: string;
    codeChallengeMethod: string;
    authUrl: string;
};
export type RegisterWithEmailType = (email: string, password: string) => Promise<void>;
export type SignInWithEmailType = (email: string, password: string) => Promise<void>;
export type SignInWithProviderType = (provider: string) => Promise<void>;
export type SubmitProviderResultType = (url: string) => Promise<void>;
export type SignOutType = () => void;
export type SendPasswordResetEmailType = (email: string) => Promise<void>;
export type SendEmailVerificationType = (email: string) => Promise<void>;
export type UpdateProfileType = (id: string, record: {}) => Promise<void>;
export type UpdateEmailType = (email: string) => Promise<void>;
export type DeleteUserType = (id: string) => Promise<void>;
export interface AuthActions {
    registerWithEmail: RegisterWithEmailType;
    signInWithEmail: SignInWithEmailType;
    signInWithProvider: SignInWithProviderType;
    submitProviderResult: SubmitProviderResultType;
    signOut: SignOutType;
    sendPasswordResetEmail: SendPasswordResetEmailType;
    sendEmailVerification: SendEmailVerificationType;
    updateProfile: UpdateProfileType;
    updateEmail: UpdateEmailType;
    deleteUser: DeleteUserType;
}
export declare const AuthContext: React.Context<AuthActions>;
export type AuthProviderProps = {
    children: React.ReactNode;
    webRedirectUrl: string;
    mobileRedirectUrl: string;
    openURL: (url: string) => Promise<void>;
};
export declare const AuthProvider: (props: AuthProviderProps) => React.JSX.Element;
