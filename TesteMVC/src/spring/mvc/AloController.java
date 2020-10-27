package spring.mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AloController {
	
	@RequestMapping("/mensagem")
	public ModelAndView mensagem() {
		
		return new ModelAndView("mensagem", "conteudo", "Boa noite!");
		
	}
	
	@RequestMapping("/aluno")
	public ModelAndView getAluno() {
		
		AlunoBean aluno = new AlunoBean();
		aluno.setNome("Joao");
		aluno.setNota(9.5f);
		return new ModelAndView("aluno", "conteudo", aluno);
	}

}
