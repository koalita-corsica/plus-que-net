export default {
    title: 'Formulaire',
    name: 'formulaire',
    type: 'document',
    fields: [
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            options: {
              range: {min: 0, max: 10, step: 0.2}
            }
          }
    ]
}