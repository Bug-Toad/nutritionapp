 

Key Questions & ConcernsThis section collects all open questions, unresolved decisions, and areas needing clarification so they are visible at the top of the document and not forgotten.Functional Questions

- Should meal plans support multi‑day or weekly planning?
    
- Are nutrition goals (calories, macros, micronutrients) part of meal plan generation?
    
- Should users be able to share private recipes with specific people?
    
- Will the app include social features such as following other users?
    
- Should shopping lists support quantity adjustments, substitutions, or store selection?
    
- Will feedback messages be stored internally, emailed, or sent to an external system?
    
- Should recipes support images, step‑by‑step instructions, or video attachments?
    
- Are there admin tools for moderating public recipes or reviews?
    
- Should users be able to export meal plans or shopping lists?
    
- How will tags be standardized (free‑form, predefined list, or hybrid)?
    

Technical Questions

- Will the food database rely solely on USDA, or also include international datasets?
    
- Should the app support barcode scanning for food lookup on web as well as mobile?
    
- How will the system handle 2M+ food items efficiently (indexing, caching, pagination)?
    
- Should meal plan generation use rule‑based logic, AI suggestions, or both?
    
- Will the recommendation engine require machine learning, or remain deterministic?
    
- Should the app support offline mode on web or only on mobile?
    
- How will sync conflicts be resolved between mobile and web?
    
- Should Supabase be the long‑term solution, or is migration to AWS/RDS expected later?
    
- Will image uploads require compression, auto‑tagging, or content moderation?
    
- Should the API be REST, GraphQL, or a hybrid approach?
    

Deployment & Infrastructure Concerns

- Expected traffic scale and whether [Fly.io](https://Fly.io) is sufficient long‑term.
    
- Need for global CDN for recipe images and food photos.
    
- Handling environment variables across monorepo apps.
    
- Backup and recovery strategy for Supabase Postgres.
    
- Logging and monitoring thresholds for Sentry and OpenTelemetry.
    

UX & Product Questions

- Should the app include onboarding flows for dietary goals?
    
- How much customization should users have in meal plan templates?
    
- Should recipes include nutrient breakdown per ingredient or only per serving?
    
- Will users be able to duplicate or fork public recipes?
    
- Should reviews include photos, ratings, or long‑form comments?
    
- Should meal plans support drag‑and‑drop reordering on mobile?
    
