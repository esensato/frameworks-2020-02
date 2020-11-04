package teste.boot;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlunoDAO extends CrudRepository<AlunoBean, Integer>{
	
	public List<AlunoBean> findByNome(String nome);
	
	@Query("select a from TAB_ALUNO a where a.nota >= ?1")
	public List<AlunoBean> obterNotasMaioresQue(Float nota);

}
