---
title: 'Next.js page options and how they work'
metaTitle: 'Next.js page options and how they work'
metaDesc: 'How to use pages in Next.js exploring the options'
socialImage: images/22-09-2021.jpg
date: '2021-09-22'
tags:
  - nextjs
  - post
---
# Spawoz Technologies
## 2020-2022
Creating pages is an integral part of any framework. Today we'll be looking at three different types of pages that we can leverage in Next.js.
> yes bro
1. Static pages (`/about`, `/contact`)
2. Dynamic page content (`/posts/all`)
3. Dynamic page paths (`/posts/1`, `posts/2`)

Let's look at how we can create these in Next.js.

## Static pages in Next.js

To create static pages, we can simply create a file in our `pages` folder. This file can be a variety of extensions: `.js`, `.jsx`, `.ts`, `.tsx`. Let's create a simple static contact page for our [Next.js tailwind starter](https://github.com/rebelchris/next-tailwind). Create a file called `contact.js` in your `pages` folder.

```js
import Head from 'next/head';

export default function Contact() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Head>
        <title>Contact page</title>
        <meta name='description' content='Contact us' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-xs my-2 overflow-hidden rounded shadow-lg'>
        <div className='px-6 py-4'>
          <div className='mb-2 text-xl font-bold'>Contact us</div>
          <p className='text-base text-grey-darker'>
            This will be the place to contact us later on.
          </p>
        </div>
      </div>
    </div>
  );
}
```
And now if we run our script again `npm run dev` we can visit `http://localhost:3000/contact`. This should now show the page we just created.

<figure>
  <Image height={100} width={200} layout="responsive" 
    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1631702332167/H9HkNDp6F.png" 
    alt="Contact page in Next.js" 
  />
  *Contact page in Next.js*
</figure>

## Creating dynamic based pages

However, we often want our page to contain data from an external resource. Let's take the Anime API we used before as an example. The API endpoint we'll be using: `https://api.jikan.moe/v3/top/anime/1`. But let's first create a file called `shows.js` that should list all the top anime shows. We need to use the `getStaticProps` function for this to work. This function will fire and fetch data from an API. Then passes it to the actual view.

So let's break it up into sections and fill those out one by one.

```js
function Shows({ shows }) {
  return (
    // HTML CODE
  );
}

export async function getStaticProps() {
  const shows = // TODO;
  return {
    props: {
      shows,
    },
  };
}

export default Shows;
```

So this is the main wireframe. We have our function that contains the JSX code (HTML), then we have the `getStaticProps` function, which fires on build time. This can do API calls while we await it. And we can then return them as props. These props are passed to our primary function (Shows).

So let's see how we can fetch data inside the `getStaticProps` function.

```js
const res = await fetch('https://api.jikan.moe/v3/top/anime/1');
const shows = await res.json();
```

As you can see, top-level awaits are supported out of the box, which is super handy! We call the API, await the response, and convert it into a JSON object. Then as for our HTML, we can now use this `shows` object since we passed it to our function.

```js
function Shows({ shows }) {
  return (
    <div className='grid min-h-screen grid-cols-5 gap-4 p-5'>
      {shows.top.map((show) => (
        <div
          key={show.id}
          className='max-w-xs my-2 overflow-hidden rounded shadow-lg '
        >
          <img
            className='flex-1 object-cover w-full h-80'
            src={show.image_url}
            alt={show.title}
          />
          <div className='px-6 py-4'>
            <div className='mb-2 text-xl font-bold'>{show.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

We create a simple render of each show's own card, with an image and title of the anime show.


## Creating dynamic page paths

We still only have one page that loads dynamic data with the above example. Let's say we want to create a single page for each show. These pages could host more detailed information about the show. In Next.js, we can create dynamic pages by wrapping them in brackets like `show/[id].js` where the `[id]` is dynamic. For this, we can leverage the `getStaticPaths` method. This can pre-fetch our endpoints. And we can still include the `getStaticProps` to retrieve the data on build time.

Let's put this together.

```js
function Show(show) {
  return <h1>{show.title}</h1>;
}

export async function getStaticPaths() {
  const res = await fetch('https://api.jikan.moe/v3/top/anime/1');
  const shows = await res.json();
  const paths = shows.top.map((show) => {
    return {
      params: { id: show.mal_id.toString() },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.jikan.moe/v3/anime/${params.id}`);
  const show = await res.json();
  return { props: show };
}

export default Show;
```

Wow, quite a lot going on, right? First, we have a simple view to keep things easy. We use an `h1` to return the title of the single page. Then we use `getStaticPaths` to create a path for each top show. We use the `mal_id` to generate unique ID pages. Then we use the `getStaticProps` function to retrieve these IDs from the URL and fetch the detailed view for each show. It results in a single page for each show.

And that's it. We now have explored these three ways of creating pages in Next.js.
I hope you found this helpful article. You can also find the complete code on [GitHub](https://github.com/rebelchris/next-tailwind/tree/pages).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)




### Loop variables in blade
Check if the item is first or last in the collection.
```php
@foreach ($users as $user)
    @if ($loop->first)
        This is the first iteration.
    @endif

    @if ($loop->last)
        This is the last iteration.
    @endif

    <p>This is user {{ $user->id }}</p>
@endforeach
```
#### Other $loop stuff

<table>
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>$loop->index</td><td>The index of the current loop iteration (starts at 0).</td></tr>
    <tr><td>$loop->iteration</td><td>The current loop iteration (starts at 1).</td></tr>
    <tr><td>$loop->remaining</td><td>The iterations remaining in the loop.</td></tr>
    <tr><td>$loop->count</td><td>The total number of items in the array being iterated.</td></tr>
    <tr><td>$loop->first</td><td>Whether this is the first iteration through the loop.</td></tr>
    <tr><td>$loop->last</td><td>Whether this is the last iteration through the loop.</td></tr>
    <tr><td>$loop->even</td><td>Whether this is an even iteration through the loop.</td></tr>
    <tr><td>$loop->odd</td><td>Whether this is an odd iteration through the loop.</td></tr>
    <tr><td>$loop->depth</td><td>The nesting level of the current loop.</td></tr>
    <tr><td>$loop->parent</td><td>When in a nested loop, the parent's loop variable.</td></tr>
  </tbody>
</table>

### Comments
```php
{{-- This comment will not be present in the rendered HTML --}}
```

### Requests 
#### Retrieving Boolean Input Values
```php
//returns true for 1, "1", true, "true", "on", and "yes". All other values will return false:
$archived = $request->boolean('archived'); 
```

### File storage
```php
Route::post('process', function (Request $request) {
    $path = $request->file('photo')->store('photos'); //Or $request->photo->store('images')
    dd($path); // photos/3hcX8yrOs2NYhpadt4Eacq4TFtpVYUCw6VTRJhfn.png

    $photo = $request->file('photo');
    $filename = 'profile-photo-' . $request->id . '.' . $file->getClientOriginalExtension(); //Or $request->photo->extension()
    $path = $photo->storeAs('photos', $filename);
    dd($path); // photos/profile-photo-100.png

    //Or Multiple files
    // $paths  = [];
    // foreach ($photos as $photo) {
    //     $extension = $photo->getClientOriginalExtension();
    //     $filename  = 'profile-photo-' . time() . '.' . $extension;
    //     $paths[]   = $photo->storeAs('photos', $filename);
    // }
    //
    // dd($paths); //array:2 ["photos/profile-photo-1517315875.gif","photos/profile-photo-1517315875.png"]
});
```

#### Retriving files
```php
$filename = User::where('id', Auth::user()->id())->firstOrFail('filename');
$filename = 'profile-photo-' . Auth::user()->id() . '.jpg';
$path = Storage::path('photos/' . $filename);

if(Storage::exists($path)){
        return Response::download($path, $filename);
}
```

### Eloquent
```php
//Set the entry, i.e. update existing entry OR create then update that entry
public function setDashboardConfigs($vars)
{ 
    $entry = DashboardSetting::firstOrNew(
        ['role_id' => $vars['id']] //Retrive if role_id=num exist or instantiate a new DashboardSetting instance
    );
    $entry->dashboard_items = json_encode($vars['items']);
    $entry->save();
    return response()->json($entry->toArray());
}

//Sum of column values
$data = CookRating::select('CookID')
    ->with('cook:cook_name,id')
    ->whereDate('AddedDate', '>=', $date[0])
    ->whereDate('AddedDate', '<=', $date[1])
    ->where('Status', 0)->groupBy('CookID')
    ->selectRaw('sum(NoOfBatch) as batches, sum(NoOfDays) as days, avg(Value) as rating')
    ->has('cook')
    ->get()
    ->map(function ($item) {
        return [
            "name" => ($item->cook? $item->cook->cook_name:null),
            "days" => $item->days,
            "batches" => $item->batches,
            "rating" => $item->rating + 0,
        ];
    });

//Counts in ranges
$ranges = [ // the start of each age-range.
    '0-17' => 0,
    '18-24' => 18,
    '25-34' => 25,
    '35-44' => 35,
    '45-54' => 45,
    '55-64' => 55,
    '64+' => 64,
];
$output = Trekuser::select('trek_user_dob as dob')
    ->get()
    ->map(function ($user) use ($ranges) {
        $age = Carbon::parse($user->dob)->age;
        foreach ($ranges as $key => $breakpoint) {
            if ($breakpoint >= $age) {
                $user->range = $key;
                break;
            }
        }
        return $user;
    })
    ->mapToGroups(function ($user, $key) {
        return [$user->range => $user];
    })
    ->map(function ($group) {
        return count($group);
    })
    ->sortKeys()->toArray();

```

### Carbon
```php
$date1 = Carbon::parse($trek_start_date);
$date2 = Carbon::parse($trek_end_date);
$sumOfDays += $date1->diffInDays($date2);
```