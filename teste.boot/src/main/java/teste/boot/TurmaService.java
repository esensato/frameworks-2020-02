package teste.boot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/turma")
public class TurmaService {
	
	@Autowired
	private TurmaDAO dao;

	// criação de uma nova turma - POST
	@PostMapping("/")
	public ResponseEntity<Turma> criar(@RequestBody Turma novaTurma) {
		return new ResponseEntity<Turma>(dao.save(novaTurma), HttpStatus.OK);
	}
	
	
	// incrementar total de alunos matriculados na turma - PUT
	@PutMapping("/{identificacao}/{quantidade}")
	public ResponseEntity<Integer> incrementar(@PathVariable String identificacao,
											   @PathVariable Integer quantidade) {
		Turma t = dao.findByIdentificacao(identificacao);
		if (t != null) {
			int novaQtde = t.getTotalMatriculas();
			novaQtde += quantidade;
			t.setTotalMatriculas(novaQtde);
			dao.save(t);
			return new ResponseEntity<Integer>(novaQtde, HttpStatus.OK);
		} else {
			return new ResponseEntity<Integer>(HttpStatus.NOT_FOUND);
		}
	}
	
	// diminuir total de alunos matriculados na turma - PUT
	@DeleteMapping("/{identificacao}/{quantidade}")
	public ResponseEntity<Integer> diminuir(@PathVariable String identificacao,
											@PathVariable Integer quantidade) {
		Turma t = dao.findByIdentificacao(identificacao);
		if (t != null) {
			int novaQtde = t.getTotalMatriculas();
			novaQtde -= quantidade;
			t.setTotalMatriculas(novaQtde);
			dao.save(t);
			return new ResponseEntity<Integer>(novaQtde, HttpStatus.OK);
		} else {
			return new ResponseEntity<Integer>(HttpStatus.NOT_FOUND);
		}
	}
	
	// total de alunos em todas as turmas - GET
	@GetMapping("/total/matriculas")
	public ResponseEntity<Integer> getTotalMatriculas() {
		int ret = 0;
		for (Turma t:dao.findAll()) {
			ret += t.getTotalMatriculas();
		}
		return new ResponseEntity<Integer>(ret, HttpStatus.OK);
	}
	
}
