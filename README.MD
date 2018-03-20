**Dave's Airport Challenge**

Collaborators: Chris Ly
Date Started: 20 March 2018
Javascript with Jasmine testing

**User Stories**

```
As a plane,
so I can visit Dave at his airport,
I want to land at Dave's Airport.

As a plane,
so I can land safely,
I want Dave to instruct me to land - plane lands.

As a plane,
So I can travel to another Dave's Airport,
I want Dave to instruct me to takeoff - plane takeoff.
```

**Application Feature Example (in console)**

```
> airport = new Airport()
< Airport {hangar: [], landed: function, land: function, takeoff: function}
> plane = new Plane('BA');
< Plane {name: "BA"}
> airport.land("BA");
< undefined
> airport.landed();
< ["BA"] (1)
> airport.takeoff("Dave");
< undefined
> airport.landed();
< [] (0)
```
