export interface UserDTO {
    id?: string;
    name: string;
    email: string;
    supabaseId: string;
    hasMFS: boolean;

    factorId?: string;
    isMFAValidated?: boolean;
    isFirstMFAAccess?: boolean;
}