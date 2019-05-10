import {Recipe} from './recipe';

export const RECIPES: Recipe[] =[
    {
        id: 1,
        title: "Oat pancake",
        ingredients: "1/2 cup rolled oat \n1 ripe banana\n1 egg",
        instructions: "Blend the oat. Mix all the ingredients. Cook them. Enjoy!",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        category: 'BLW'
    },
    {
        id: 2,
        title: "Baked califlower",
        ingredients: "2 cups chopped califlower \n1.5 tbls cumin \n1 tbls tumeric \nOlive oil as desire",
        instructions: "Pre-heat oven to 400C. Mix all the ingredients. Baked the mix for 20 min or until golden. Enjoy!",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        category: 'BLW'
    },

    {
        id: 3,
        title: "Berries smoothie",
        ingredients: "1/2 cup blueberry \n1/2 cup strawberry \n1/2 cup rasberry \n1/2 banana \n1 cup milk \n 2 tbls gorounded flax seed",
        instructions: "Mix all the ingredients and blend them until it is completly smooth. Enjoy!",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
        category: 'SMOOTHIE'
    }
];

