package com.fooddelivery.system.dto;

import com.fooddelivery.system.entity.Role;

public class UserLoginResponse {

    private Long userId;
    private String name;
    private String email;
    private Role role;

    public UserLoginResponse(Long userId, String name, String email, Role role) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.role = role;
    }

    public Long getUserId() { return userId; }
    public String getName() { return name; }
    public String getEmail() { return email; }
    public Role getRole() { return role; }
}
