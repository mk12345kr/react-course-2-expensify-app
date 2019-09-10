import authReducer from "../../reducers/auth";
test("should set uid for login",()=>{
    const state=authReducer({},{type:"LOGIN",uid:"123abc"});
    expect(state.uid).toBe("123abc");
});
test("should clear uid for logout",()=>{
    const state=authReducer({},{type:"LOGOUT"});
    expect(state).toEqual({});
});