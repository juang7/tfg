package com.jfgp.Tfg.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Mesa {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	@NotNull
	private Integer numero;
	@NotNull
	private String QR;
	@NotNull
	private Integer plazas;
	@ManyToOne
	private Bar bar;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getNumero() {
		return numero;
	}
	public void setNumero(Integer numero) {
		this.numero = numero;
	}
	public String getQR() {
		return QR;
	}
	public void setQR(String qR) {
		QR = qR;
	}
	public Integer getPlazas() {
		return plazas;
	}
	public void setPlazas(Integer plazas) {
		this.plazas = plazas;
	}
	public Bar getBar() {
		return bar;
	}
	public void setBar(Bar bar) {
		this.bar = bar;
	}
}
