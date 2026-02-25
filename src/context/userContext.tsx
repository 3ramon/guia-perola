import React, { createContext, useState, ReactNode, useEffect } from "react";

// O formato dos dados que queremos salvar

// O que o contexto vai oferecer para quem usar ele
interface UserContextType {
    user: null;
}

export const UserContext = createContext<UserContextType>(
    {} as UserContextType,
);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<null>(null);

    useEffect(() => {}, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
}
