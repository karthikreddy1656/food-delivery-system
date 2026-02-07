package com.fooddelivery.system.repository;

import com.fooddelivery.system.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
