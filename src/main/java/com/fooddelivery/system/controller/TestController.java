package com.fooddelivery.system.controller;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173") // ✅ ADDED
@RestController
public class TestController {

    @GetMapping("/api/test/hello")
    public String hello() {
        return "Hello, authenticated user!";
    }
}
