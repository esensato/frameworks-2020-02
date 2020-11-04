package teste.boot;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Turma {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	private String identificacao;
	
	private int totalmatriculas;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getIdentificacao() {
		return identificacao;
	}
	public void setIdentificacao(String identificacao) {
		this.identificacao = identificacao;
	}
	public int getTotalMatriculas() {
		return totalmatriculas;
	}
	public void setTotalMatriculas(int totalMatriculas) {
		this.totalmatriculas = totalMatriculas;
	}
	
	
	
}
