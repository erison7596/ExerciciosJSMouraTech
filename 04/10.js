function ranking(jogos) {
    const times = {};
    jogos.forEach((jogo) => {
      if (!times[jogo.Time1]) {
        times[jogo.Time1] = {
          Time: jogo.Time1,
          P: 0,
          J: 0,
          V: 0,
          E: 0,
          D: 0,
          GP: 0,
          GC: 0,
          SG: 0,
        };
      }
      if (!times[jogo.Time2]) {
        times[jogo.Time2] = {
          Time: jogo.Time2,
          P: 0,
          J: 0,
          V: 0,
          E: 0,
          D: 0,
          GP: 0,
          GC: 0,
          SG: 0,
        };
      }
      times[jogo.Time1].J++;
      times[jogo.Time2].J++;
      times[jogo.Time1].GP += jogo.P1;
      times[jogo.Time2].GP += jogo.P2;
      times[jogo.Time1].GC += jogo.P2;
      times[jogo.Time2].GC += jogo.P1;
      const diferenca = jogo.P1 - jogo.P2;
      if (diferenca > 0) {
        times[jogo.Time1].V++;
        times[jogo.Time1].P += 3;
      } else if (diferenca === 0) {
        times[jogo.Time1].E++;
        times[jogo.Time1].P++;
        times[jogo.Time2].E++;
        times[jogo.Time2].P++;
      } else {
        times[jogo.Time2].V++;
        times[jogo.Time2].P += 3;
      }
      times[jogo.Time1].SG += diferenca;
      times[jogo.Time2].SG -= diferenca;
    });
    const classificacao = Object.values(times).sort((a, b) => {
      if (a.P !== b.P) {
        return b.P - a.P;
      }
      if (a.V !== b.V) {
        return b.V - a.V;
      }
      if (a.SG !== b.SG) {
        return b.SG - a.SG;
      }
      return b.GP - a.GP;
    });
  
    return classificacao;
  }
  