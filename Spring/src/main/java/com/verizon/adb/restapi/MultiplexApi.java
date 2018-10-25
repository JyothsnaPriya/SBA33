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

import com.verizon.adb.model.Multiplex;
import com.verizon.adb.service.MultiplexService;

@RestController
@CrossOrigin
@RequestMapping("/Multiplexes")
public class MultiplexApi {

	@Autowired
	private MultiplexService service;

	@GetMapping
	public ResponseEntity<List<Multiplex>> getAllMultiplexes() {
		return new ResponseEntity<>(service.getAllMultiplexes(), HttpStatus.OK);

	}

	@GetMapping("/{id}")
	public ResponseEntity<Multiplex> getMultiplexesById(@PathVariable("id") String mulname) {
		ResponseEntity<Multiplex> resp;
		Multiplex c = service.getMultiplexById(mulname);
		if (c == null)
			resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		else
			resp = new ResponseEntity<>(c, HttpStatus.OK);
		return resp;

	}

	@GetMapping("/{field}/{srchValue}")
	public ResponseEntity<List<Multiplex>> getAllContacts(@PathVariable("field") String fieldBy,
			@PathVariable("srchValue") String searchValue) {
		ResponseEntity<List<Multiplex>> resp = null;
		switch (fieldBy) {
		
		case "mulname":
			Multiplex cBYmulname = service.findByMulname(searchValue);
			if (cBYmulname != null) {
				resp = new ResponseEntity<>(Collections.singletonList(cBYmulname), HttpStatus.OK);
			} else {
				resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			break;
			
		case "location":
			Multiplex cBYlocation = service.findByLocation(searchValue);
			if (cBYlocation != null) {
				resp = new ResponseEntity<>(Collections.singletonList(cBYlocation), HttpStatus.OK);
			} else {
				resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			break;
			
		case "contactno":
			Multiplex cBYcontactno = service.findByContactno(searchValue);
			if (cBYcontactno != null) {
				resp = new ResponseEntity<>(Collections.singletonList(cBYcontactno), HttpStatus.OK);
			} else {
				resp = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			break;
			
		}
		return resp;

	}
	
	@PostMapping
	public ResponseEntity<Multiplex> addMultiplex(@RequestBody Multiplex multiplex) {
		ResponseEntity<Multiplex> resp = null;

		if (resp == null) {
			Multiplex c = service.addMultiplex(multiplex);
			if (c == null)
				resp = new ResponseEntity<Multiplex>(HttpStatus.BAD_REQUEST);
			else
				resp = new ResponseEntity<Multiplex>(c, HttpStatus.OK);
		}
		return resp;
	}


}
