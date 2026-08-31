
## User Access & Subscription

Users enter the application through a secure login flow using a username and password. Once authenticated, they gain access to all features permitted by their subscription tier. The subscription model governs access to premium capabilities such as advanced meal‑plan generation, expanded recipe storage, enhanced search filters, and priority feedback handling. The system must maintain persistent user profiles, track subscription status, and gracefully restrict or unlock features based on the user’s plan. Renewal, upgrade, and cancellation flows are integrated into the user’s account settings.

- Anonymous food item lookup so anyone can look up an item.
- Users log in with username and password.
- Application is subscription‑based.
- 30 day subscription expiration notification.
- Can cancel early and can have the rest of the time.
- One tier, one plan, no upgrades or downgrades.


## Access the Recipe Book

The Recipe Book is designed for fast discovery, intuitive filtering, and seamless exploration.

Each user has a personal recipe book.  All users can also view a public recipe book, which is all recipes shared by all users. Everything is public unless marked as private.  

Users can search each book by keywords, filter by tags, or ingredients. Each recipe displays full nutrition details, ingredient lists, preparation steps, and tags. Tags act as a dynamic classification system — users can click a tag to instantly filter recipes across the entire library. Users can mark recipes as favorites, which shows the recipe in the user's personal recipe book, allowing quick access later and enabling personalized meal‑plan generation. 

- Search, filter, and view all public recipes.    
- Recipes can be tagged.    
- Tags are searchable.    
- Users can favorite recipes.


## Create a New Recipe

Users can build recipes using an interactive recipe builder. They search for food items in the nutrition database and drag them into the recipe workspace. Each ingredient automatically contributes its nutrition profile to the recipe’s total, which updates in real time as items are added, removed, or adjusted. Users can specify quantities, preparation notes, and cooking instructions. Recipes are public by default but can be marked private. Users assign tags to improve discoverability and categorize their creations. Once saved, the recipe becomes available for meal‑plan generation, sharing, and favoriting.

- Build recipes using a recipe builder.
    - Drag food items into the recipe.  
    - Adjust quantities, preparation notes, and cooking instructions through drag and drop when possible.
- After creating recipe, user is prompted for
    - serving size.
    - dietary restrictions.
    - Assign tags which define recipe type like vegan, keto, lactose friendly, etc.
    - Categorize is a entree, side, dessert, etc..
- Public unless marked private.
- Nutrition auto‑calculated.
   

## Look Up a Food Item

Users can search the food database containing over two million items sourced from authoritative nutrition datasets. Search supports keywords, partial matches. Each food item displays detailed nutrient information including macros, vitamins, minerals, and serving‑size variations. Selecting a food item allows users to quickly add items to recipes or meal plans. This feature acts as the foundation for all nutrition calculations throughout the app.

- (Technical) Deduplicate search results, remove 0 quantity nutrient values, and remove outliers.
- (Technical) Implement search ranking algorithm.
- (Technical) Implement search result filtering, pagination, max results, and sorting.
- (Technical) Can we average the nutrient data for duplicate food items?
- (Technical) Save the nutreint totals information to the recipe.

- Search the food database.    
- View detailed nutrient information.
    

## Generate Meal Plans

Users can generate meal plans automatically using their favorited recipes or selected filters. Users can refine the generated plan by filtering recipes (e.g., vegan only, high‑protein, low‑carb) or by including private recipes. The meal plan assigns recipes to days of the week.  Once generated, users can customize the plan using a drag‑and‑drop interface rearrange the meals.

- Auto assign and drag‑and‑drop customization.
- Automatically generate meal plans using private recipes.
    
- Assign recipes to a meal type (breakfast, lunch, ...)
- Assign meals to a day

## View My Saved Meal Plans

Users can access all previously saved meal plans in a dedicated section. Each plan is displayed in a clean, easy‑to‑read format that highlights daily meals, recipe names, and nutrition summaries. Users can expand individual recipes to view ingredients and instructions without leaving the page. Saved plans can be duplicated, edited, or used to generate shopping lists. This section acts as the user’s personal archive of structured eating plans.

- Determine the number of meals per day.
- Save a meal plan, which is just the meals, no order.
- View saved meal plan.
- Display saved meal plans.    
- Easy‑to‑read recipe format.
    

## Create Shopping List

Users select one of their saved meal plans and generate a shopping list based on its ingredients. The system aggregates ingredients across all recipes, consolidates duplicates, and calculates total required quantities. Users can manually adjust quantities, remove items, or add custom entries. The shopping list can be saved, exported, or used as a checklist during shopping.

- Select a saved meal plan.    
- Generate a shopping list.
- View shopping list from site.
    

## Provide Feedback
 
This feature ensures ongoing communication between users and developers, supporting continuous improvement of the application.

Users can send feedback directly to the development team through a dedicated messaging interface. Feedback may include suggestions, bug reports, feature requests, or general comments. Messages are stored with user metadata (subscription tier, device type, etc.) to help the team prioritize and respond effectively.

