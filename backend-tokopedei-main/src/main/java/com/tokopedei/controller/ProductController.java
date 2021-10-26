package com.tokopedei.controller;

import com.tokopedei.model.Product;
import com.tokopedei.model.Users;
import com.tokopedei.repository.ProductRepo;
import com.tokopedei.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api-backend/")
public class ProductController {
	
	@Autowired
	private ProductRepo productRepo;
	
	//get all data
	@GetMapping("/product")
	public List<Product> getAllProduct(){
		return productRepo.findAll();
	}
}
