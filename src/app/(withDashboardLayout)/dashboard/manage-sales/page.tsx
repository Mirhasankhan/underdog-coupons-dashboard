"use client"
import { setUser, useCurrentUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { JWTDecode } from '@/utils/jwt';
import React from 'react';

const DashboardHomePage = () => {
    const user2 = JWTDecode()
    console.log(user2)
    const user = useAppSelector(useCurrentUser);
    console.log(user)
    const dispatch = useAppDispatch();
    const loginUser = ()=>{
        dispatch(
            setUser({
              name: "hasasn",
              email: "hasan@gmail.com",
              role: "seller",
              token: "token will come",
            })
          );
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
    const loginLocal = ()=>{
        localStorage.setItem("token", token)
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user2?.name}</h1>
            <button onClick={()=>loginUser()}>Login user</button>
            <button onClick={()=>loginLocal()}>Login local</button>
        </div>
    );
};

export default DashboardHomePage;