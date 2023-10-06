<p align="center">
<img src="/public/balanced-citizen-logo.png" width="300" alt="logo"/>
</p>

# Balanced Citizen

There are 24 hours in a day. Make the most of them!

With this app, you'll be able to track your productivity with an emphasis on balance in three separate categories:

1. **Workin'**: This is work. You're putting your efforts toward a task that you have to do. Could be paid labor, could be yard work, any type of work.
2. **Strivin'**: This category is for any sort of self-improvement work. Going to the gym. Reading. Studying a new language. Meditation.
3. **Thrivin'**: This category is for fun. If you're at a music festival, you're thrivin'! If you're at a restaurant with your best friend, thrivin' is what you're up to.

## To Test the Deployed App

Head to: [https://balancedcitizen.vercel.app](https://balanced-citizen.vercel.app).

## Running the App

If you'd like to try running the app locally, follow these steps:

1. Clone or download the repo: `https://github.com/moonhighway/balanced-citizen`.
2. Once you're in the repo (`cd balanced-citizen`), install the dependencies: `npm i`.
3. Create a file at the root of the project called `env.local`. Here you'll place your own environment variables. We've already filled in the `NEXT_PUBLIC_CLERK_**` sign in and sign up variables.

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

4. This project uses Clerk for user authentication. You'll need a (free) Clerk account ([Clerk.com](https://clerk.com/))to retrieve these variables.
5. This project uses Supabase as a database. You'll also need a (free) Supabase account ([Supabase.com](https://supabase.com/)) to grab these variables.
6. Once these are placed in the `env.local` file, run the project with `npm run dev`.

## Known Issues & Things to Make Better

This is a demo app, and there are definitely things to make better!

1. Handle logins and database management for multiple users.
2. Create a data visualization to show the distribution of activities.
3. Better error handling for going over 24 hours in a day.
