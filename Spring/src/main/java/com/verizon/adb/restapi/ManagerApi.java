package com.verizon.adb.restapi;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.verizon.adb.model.Manager;
import com.verizon.adb.model.Multiplex;
import com.verizon.adb.service.MultiplexService;
import com.verizon.adb.service.ManagerService;

@RestController
@CrossOrigin
@RequestMapping("/Managers")
public class ManagerApi {

	@Autowired
	private ManagerService service;

	@GetMapping
	public ResponseEntity<List<Manager>> getAllManagers() {
		return new ResponseEntity<>(service.getAllManagers(), HttpStatus.OK);

	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Manager> getMultiplexesById(@PathVariable("id") long managerid) {
		ResponseEntity<Manager> resp;
		Manager g = service.getManagerById(managerid);
		if (g == null)
			resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		else
			resp = new ResponseEntity<>(g, HttpStatus.OK);
		return resp;
	}
	
	@GetMapping("/{field}/{srchValue}")
	public ResponseEntity<List<Manager>> getAllContacts(@PathVariable("field") String fieldBy,
			@PathVariable("srchValue") String searchValue) {
		ResponseEntity<List<Manager>> resp = null;
		switch (fieldBy) {
		
		case "firstname":
			Manager cBYfirstname = service.findByFirstname(searchValue);
			if (cBYfirstname != null) {
				resp = new ResponseEntity<>(Collections.singletonList(cBYfirstname), HttpStatus.OK);
		} else {
				resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			break;
		
		case "address":
			Manager cBYaddress = service.findByAddress(searchValue);
			if (cBYaddress != null) {
				resp = new ResponseEntity<>(Collections.singletonList(cBYaddress), HttpStatus.OK);
			} else {
				resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			break;
			
		case "mobilenumber":
			Manager cBYmobilenumnber = service.findByMobilenumber(searchValue);
			if (cBYmobilenumnber != null) {
				resp = new ResponseEntity<>(Collections.singletonList(cBYmobilenumnber), HttpStatus.OK);		} else {
				resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			break;
			
		}
		return resp;
	}

	@PostMapping
	public ResponseEntity<Manager> addManager(@RequestBody Manager manager) {
		ResponseEntity<Manager> resp = null;
		
		if (resp == null) {
			Manager c = service.addManager(manager);
			if (c == null)
				resp = new ResponseEntity<Manager>(HttpStatus.BAD_REQUEST);
			else
				resp = new ResponseEntity<Manager>(c, HttpStatus.OK);
		}
		return resp;
	}
	
	@PutMapping
	public ResponseEntity<Manager> updateContact(@RequestBody Manager manager) {
		ResponseEntity<Manager> resp = null;

		Manager c = service.getManagerById(manager.getManagerid());
//		if (!contact.getEmailId().equals(c.getEmailId())) {
//			if (service.existsByEmailId(contact.getEmailId())) {
//				resp = new ResponseEntity<Employee>(HttpStatus.ALREADY_REPORTED);
//			}
//		}
//
//		if (!contact.getMobileNum().equals(c.getMobileNum())) {
//			if (service.existsByMobileNum(contact.getMobileNum())) {
//				resp = new ResponseEntity<Employee>(HttpStatus.ALREADY_REPORTED);
//			}
//		}

		if (resp == null) {
			c = service.updateManager(manager);
			if (c == null)
				resp = new ResponseEntity<Manager>(HttpStatus.BAD_REQUEST);
			else
				resp = new ResponseEntity<Manager>(c, HttpStatus.OK);
		}
		return resp;
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteManager(@PathVariable("id") long managerid) {
		ResponseEntity<Void> resp = null;

		if (service.deleteManager(managerid))
			resp = new ResponseEntity<>(HttpStatus.OK);
		else
			resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);

		return resp;
	}
}