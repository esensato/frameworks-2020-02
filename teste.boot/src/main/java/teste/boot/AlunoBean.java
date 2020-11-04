package teste.boot;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="TAB_ALUNO")
public class AlunoBean {
	
	@Id
	@Column(name = "ID_ALUNO")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	private String nome;
	
	private float nota;

	public AlunoBean() {
		super();
	}
	
	public AlunoBean(String nome, float nota) {
		super();
		this.nome = nome;
		this.nota = nota;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public float getNota() {
		return nota;
	}

	public void setNota(float nota) {
		this.nota = nota;
	}
	
	

}
