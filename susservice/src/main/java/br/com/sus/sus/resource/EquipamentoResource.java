package br.com.sus.sus.resource;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.sus.sus.domain.Equipamento;
import br.com.sus.sus.service.EquipamentoService;

@RestController
@CrossOrigin
@RequestMapping("/api/equipamento")
public class EquipamentoResource {
	
	@Autowired
	private EquipamentoService equipamentoService;
	
	@GetMapping
	public List<Equipamento> getEquipamento(){
		return equipamentoService.getEquipamentos();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Equipamento> buscaPorId(@PathVariable Long id) {
		Equipamento equipe = equipamentoService.buscarEquipamento(id);
		return ResponseEntity.ok().body(equipe);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Equipamento> alterarEquipamento(@RequestBody Equipamento eqipe) {
		Equipamento newEquipe = equipamentoService.atualizaEquipamento(eqipe);
		return ResponseEntity.ok().body(newEquipe);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Equipamento> deletaProduto(@PathVariable Long id) {
		equipamentoService.deletarEquipamento(id);
		return ResponseEntity.noContent().build();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> saveEquipamento (@RequestBody Equipamento equipamento){
		equipamentoService.salvarEquipamento(equipamento);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(equipamento.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}
}
