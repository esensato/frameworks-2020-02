package teste.boot;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/aluno")
public class Aluno {
	
	@Autowired
	private AlunoDAO dao = null;
	
	@Value("${minha.mensagem}")
	private String mensagem;
	
	@RequestMapping("/ping")
	public String ping() {
		return mensagem;
	}
	
	@RequestMapping("/obter/{idAluno}")
	public ResponseEntity<AlunoBean> obterAluno(@PathVariable String idAluno) {
		
		if (idAluno.equals("10")) {
			AlunoBean a = new AlunoBean("Joao", 9.5f);
			return new ResponseEntity<AlunoBean>(a, HttpStatus.OK);			
		} else if (idAluno.equals("20")) {
			AlunoBean a = new AlunoBean("Maria", 10.0f);
			return new ResponseEntity<AlunoBean>(a, HttpStatus.OK);			
		}
		
		return new ResponseEntity<AlunoBean>(HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/salvar")
	public ResponseEntity<AlunoBean> salvar(@RequestBody AlunoBean aluno) {
		return new ResponseEntity<AlunoBean> (dao.save(aluno), HttpStatus.OK);
		
	}
	
	@GetMapping("/total")
	public ResponseEntity<Long> obterTotal() {
		return new ResponseEntity<Long>(dao.count(), HttpStatus.OK);
	}
	
	
	@GetMapping("/todos")
	public ResponseEntity<Iterable<AlunoBean>> obterTodos() {
		
		return new ResponseEntity<Iterable<AlunoBean>>(dao.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/obter/{nome}")
	public ResponseEntity<List<AlunoBean>> obterPeloNome(@PathVariable String nome){
		return new ResponseEntity<List<AlunoBean>>(dao.findByNome(nome), HttpStatus.OK);
	}
	
	@GetMapping("/obter/nota/maior/{nota}")
	public ResponseEntity<List<AlunoBean>> obterPeloNome(@PathVariable Float nota){
		return new ResponseEntity<List<AlunoBean>>(dao.obterNotasMaioresQue(nota), HttpStatus.OK);
	}

}
