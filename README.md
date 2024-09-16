# 3. Build a Personal Recipe Manager with Social Sharing

~1hr 15min of development time. Features were simplified and cut to get something presentable within the time limit. The core feature of the CRUD is implemented.

Set up with create-next-app, no additional packages installed.

- Basic user sign-in just by providing a username. Stores name in local storage to persist through page reload
- User can view, add, edit, and delete their recipes. There are 2 default recipes added that don't belong to the user, allowing them to see a difference in state, but not allowing the user to delete those ones.
- API Routes: Create, Edit, Delete, Get all recipes.
- Copied and pasted Tailwind classes for styling from this website for a quick, nicer visual: https://flowbite.com/docs/getting-started/introduction/
- Fully type-safe

### Startup Guide

```
npm install
npm run dev
```
