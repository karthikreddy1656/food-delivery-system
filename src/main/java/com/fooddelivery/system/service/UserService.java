package com.fooddelivery.system.service;

import com.fooddelivery.system.dto.UserLoginRequest;
import com.fooddelivery.system.dto.UserLoginResponse;
import com.fooddelivery.system.dto.UserRegisterRequest;

public interface UserService {

    String registerUser(UserRegisterRequest request);

    UserLoginResponse login(UserLoginRequest request);
}
