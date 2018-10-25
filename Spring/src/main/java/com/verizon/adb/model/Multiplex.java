package com.verizon.adb.model;
import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name="Multiplex")
public class Multiplex {
	
//		@Id 
//		@GeneratedValue(strategy=GenerationType.IDENTITY)
//		private String mulid;
		@Id
		@Column(name="mulname")
		@NotNull
		private String mulname;
			
		@Column(name="contactno")
		@NotNull
		private String contactno;
		
		@Column(name="location")
		@NotNull
		private String location;

		public Multiplex() {
			
		}

		public Multiplex(@NotNull String mulname, @NotNull String contactno, @NotNull String location) {
			
			this.mulname = mulname;
			this.contactno = contactno;
			this.location = location;
		}

		public String getMulname() {
			return mulname;
		}

		public void setMulname(String mulname) {
			this.mulname = mulname;
		}

		public String getContactno() {
			return contactno;
		}

		public void setContactno(String contactno) {
			this.contactno = contactno;
		}

		public String getLocation() {
			return location;
		}

		public void setLocation(String location) {
			this.location = location;
		}
		
	}
		
