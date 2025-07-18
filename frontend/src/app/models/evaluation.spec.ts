import { Evaluation } from './evaluation'; // Adjust the import path as needed

describe('Evaluation', () => {
  it('should create an instance of Evaluation', () => {
    const evaluation: Evaluation = {
      id: 1,
      clariteDesObjectifs: 'Satisfait',
      pertinenceDesSupportsPedagogiques: 'Très satisfait',
      competencesDuFormateur: 'Satisfait',
      reponseAuxAttentes: 'Neutre',
      organisationGenerale: 'Très satisfait',
      participant: null,
      cycle: null
    };

    // Assert that the evaluation object is truthy (i.e., it exists)
    expect(evaluation).toBeTruthy();

    // Assert individual properties
    expect(evaluation.id).toBe(1);
    expect(evaluation.clariteDesObjectifs).toBe('Satisfait');
    expect(evaluation.pertinenceDesSupportsPedagogiques).toBe('Très satisfait');
    expect(evaluation.competencesDuFormateur).toBe('Satisfait');
    expect(evaluation.reponseAuxAttentes).toBe('Neutre');
    expect(evaluation.organisationGenerale).toBe('Très satisfait');
    expect(evaluation.participant).toBeNull();
    expect(evaluation.cycle).toBeNull();
  });

  it('should create an instance of Evaluation with optional id', () => {
    const evaluation: Evaluation = {
      clariteDesObjectifs: 'Satisfait',
      pertinenceDesSupportsPedagogiques: 'Très satisfait',
      competencesDuFormateur: 'Satisfait',
      reponseAuxAttentes: 'Neutre',
      organisationGenerale: 'Très satisfait',
      participant: null,
      cycle: null
    };

    // Assert that the evaluation object is truthy (i.e., it exists)
    expect(evaluation).toBeTruthy();

    // Assert that the id is undefined (since it's optional)
    expect(evaluation.id).toBeUndefined();

    // Assert other properties
    expect(evaluation.clariteDesObjectifs).toBe('Satisfait');
    expect(evaluation.pertinenceDesSupportsPedagogiques).toBe('Très satisfait');
    expect(evaluation.competencesDuFormateur).toBe('Satisfait');
    expect(evaluation.reponseAuxAttentes).toBe('Neutre');
    expect(evaluation.organisationGenerale).toBe('Très satisfait');
    expect(evaluation.participant).toBeNull();
    expect(evaluation.cycle).toBeNull();
  });
});
