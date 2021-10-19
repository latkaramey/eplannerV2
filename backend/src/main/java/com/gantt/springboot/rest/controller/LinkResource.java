package com.gantt.springboot.rest.controller;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.gantt.springboot.rest.dao.Link;
import com.gantt.springboot.rest.dao.LinkRepository;
import com.gantt.springboot.rest.exceptions.LinkNotFoundException;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class LinkResource {

	@Autowired
	private LinkRepository linkRepository;

	@GetMapping("/links")
	public List<Link> retrieveAllLinks() {
//		List<Link> dummy = new ArrayList<Link>();
//		return dummy;
		return linkRepository.findAll();
	}

	@GetMapping("/links/{id}")
	public Link retrieveLink(@PathVariable Long id) {
		Optional<Link> link = linkRepository.findById(id);

		if (!link.isPresent())
			throw new LinkNotFoundException("id-" + id);

		return link.get();
	}

	@DeleteMapping("/links/{id}")
	public void deleteLink(@PathVariable Long id) {
		linkRepository.deleteById(id);
	}

	@PostMapping("/links")
	public ResponseEntity<Object> createLink(@RequestBody Link link) {
		Link savedLink = linkRepository.save(link);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(savedLink.getId()).toUri();

		return ResponseEntity.created(location).build();

	}
	
	@PutMapping("/links/{id}")
	public ResponseEntity<Object> updateLink(@RequestBody Link link, @PathVariable Long id) {

		Optional<Link> linkOptional = linkRepository.findById(id);

		if (!linkOptional.isPresent())
			return ResponseEntity.notFound().build();

		link.setId(id);
		
		linkRepository.save(link);

		return ResponseEntity.noContent().build();
	}
}
