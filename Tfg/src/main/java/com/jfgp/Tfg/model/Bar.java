package com.jfgp.Tfg.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Bar {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer bar_id;
	
	@NotNull
	@Size(min = 3)
	private String nombre;
	
	@NotNull
	private String ubicacion;
	
	@NotNull
	@Size(min = 3)
	private String descripcion;
	private String rangoPrecio;
	
	@OneToMany(mappedBy = "bar")
    private List<Comida> comidas;
	
	
	
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getUbicacion() {
		return ubicacion;
	}
	public void setUbicacion(String ubicacion) {
		this.ubicacion = ubicacion;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getRangoPrecio() {
		return rangoPrecio;
	}
	public void setRangoPrecio(String rangoPrecio) {
		this.rangoPrecio = rangoPrecio;
	}
	public Integer getBar_id() {
		return bar_id;
	}
	public void setBar_id(Integer bar_id) {
		this.bar_id = bar_id;
	}
	public List<Comida> getComidas() {
		return comidas;
	}
	public void setComidas(List<Comida> comidas) {
		this.comidas = comidas;
	}
	
	
}
