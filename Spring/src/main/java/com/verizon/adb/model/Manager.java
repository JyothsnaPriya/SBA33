package com.verizon.adb.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


@Entity
@Table(name="Manager")
public class Manager {
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long managerid;
	
	@NotEmpty(message="firstName cant be empty")
	@Size(min=5,max=15,message="Give Caps casing within 5 - 15 characters")
	@Column(name="fnm")
	private String firstName;
	
	@NotNull(message="gender is required")
	@Column(name="gender")
	private String gender;
	
	@NotNull(message="email is required")
	@Email
	@Column(name="mail")
	private String emailId;
	
	@NotEmpty(message="cant be null")
	@Pattern(regexp="\\d{10}", message="you are in India remember")
	@Column(name="mno")
	private String mobileNUmber;
	
	@Column(name="address")
	private String address;
	
	@Column(name="mulname")
	@NotNull
	private String mulname;
	
	public Manager() {
		
	}
	
	public Manager(long managerid,
			@NotEmpty(message = "firstName cant be empty") @Size(min = 5, max = 15, message = "Give Caps casing within 5 - 15 characters") String firstName,
			@NotNull(message = "gender is required") String gender,
			@NotNull(message = "email is required") @Email String emailId,
			@NotEmpty(message = "cant be null") @Pattern(regexp = "\\d{10}", message = "you are in India remember") String mobileNUmber,
			String address, @NotNull String mulname) {
		super();
		this.managerid = managerid;
		this.firstName = firstName;
		this.gender = gender;
		this.emailId = emailId;
		this.mobileNUmber = mobileNUmber;
		this.address = address;
		this.mulname = mulname;
	}

	public long getManagerid() {
		return managerid;
	}
	public void setManagerid(long managerid) {
		this.managerid = managerid;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getMobileNUmber() {
		return mobileNUmber;
	}
	public void setMobileNUmber(String mobileNUmber) {
		this.mobileNUmber = mobileNUmber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMulname() {
		return mulname;
	}
	public void setMulname(String mulname) {
		this.mulname = mulname;
	}
	
	

}
