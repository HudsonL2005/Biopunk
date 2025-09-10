import styles from '../../style/criacao_de_personagem.module.css'

function criacao_de_personagens() {
  return (
    <div className="criacao_de_personagem">
      <h1>Criação de personagens</h1>
      <div className={styles.hexagonoContainer}>
        <div className={styles.hexagonoContainerTest}>
        </div>
        <div className={styles.hexagonoContainerTest2}>
        </div>
      </div>
    </div>
  );
}

export default criacao_de_personagens;
