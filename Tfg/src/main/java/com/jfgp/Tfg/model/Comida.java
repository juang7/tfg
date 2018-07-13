package com.jfgp.Tfg.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
public class Comida {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	@NotNull
	@Size(min = 3)
	private String nombre;
	private String descripcion;
	@ManyToOne
	private Categoria categoria;
	@ManyToOne
	@JoinColumn(name="bar_id")
	private Bar bar;
	
	private int Precio;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public Categoria getCategoria() {
		return categoria;
	}
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	public Bar getBar() {
		return bar;
	}
	public void setBar(Bar bar) {
		this.bar = bar;
	}
	public int getPrecio() {
		return Precio;
	}
	public void setPrecio(int precio) {
		Precio = precio;
	}
}
