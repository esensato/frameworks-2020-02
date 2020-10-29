package teste.boot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/aluno")
public class Aluno {
	
	@Autowired
	private AlunoDAO dao = null;
	
	@RequestMapping("/ping")
	public String ping() {
		return "pong";
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
	
	@RequestMapping("/salvar/{nome}/{nota}")
	public ResponseEntity<AlunoBean> salvar(@PathVariable String nome, @PathVariable Float nota) {
		return new ResponseEntity<AlunoBean> (dao.save(new AlunoBean(nome, nota)), HttpStatus.OK);
		
	}

}
