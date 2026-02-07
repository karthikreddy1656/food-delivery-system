package com.fooddelivery.system.controller;

import com.fooddelivery.system.dto.UserLoginRequest;
import com.fooddelivery.system.dto.UserLoginResponse;
import com.fooddelivery.system.dto.UserRegisterRequest;
import com.fooddelivery.system.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(
            @Valid @RequestBody UserRegisterRequest request) {

        return new ResponseEntity<>(
                userService.registerUser(request),
                HttpStatus.CREATED
        );
    }

    @PostMapping("/login")
    public ResponseEntity<UserLoginResponse> login(
            @Valid @RequestBody UserLoginRequest request) {

        return ResponseEntity.ok(userService.login(request));
    }
}
