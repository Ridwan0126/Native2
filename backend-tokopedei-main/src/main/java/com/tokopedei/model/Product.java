package com.tokopedei.model;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "nameProduct")
	private String nameProduct;
	
	@Column(name = "hargaBeli")
	private long hargaBeli;
	
	@Column(name = "hargaJual")
	private long hargaJual;
	
	@Column(name = "qty")
	private long qty;
	
	@Column(name = "thumbnailURL")
	private String thumbnailURL;
	
	@Column(name = "diskon")
	private long diskon;
	
	public Product(){
	
	}
	
	public Product(String nameProduct, int hargaBeli, int hargaJual, int qty, String thumbnailURL, int diskon){
		super();
		this.nameProduct = nameProduct;
		this.hargaBeli = hargaBeli;
		this.hargaJual = hargaJual;
		this.qty = qty;
		this.thumbnailURL = thumbnailURL;
		this.diskon = diskon;
	}
	//setter getter
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getNameProduct() {
		return nameProduct;
	}
	
	public void setNameProduct(String nameProduct) {
		this.nameProduct = nameProduct;
	}
	
	public long getHargaBeli() {
		return hargaBeli;
	}
	
	public void setHargaBeli(long hargaBeli) {
		this.hargaBeli = hargaBeli;
	}
	
	public long getHargaJual() {
		return hargaJual;
	}
	
	public void setHargaJual(long hargaJual) {
		this.hargaJual = hargaJual;
	}
	
	public long getQty() {
		return qty;
	}
	
	public void setQty(long qty) {
		this.qty = qty;
	}
	
	public String getThumbnailURL() {
		return thumbnailURL;
	}
	
	public void setThumbnailURL(String thumbnailURL) {
		this.thumbnailURL = thumbnailURL;
	}
	
	public long getDiskon() {
		return diskon;
	}
	
	public void setDiskon(long diskon) {
		this.diskon = diskon;
	}
}
