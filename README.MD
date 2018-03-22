## Dave's Airport Challenge

Collaborators: Chris Ly
Date Started: 20 March 2018
Javascript with Jasmine testing

### User Stories

We have a request from a client to write the software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off.  Here are the user stories that we worked out in collaboration with the client:

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

### Application Feature Example (in console)

This feature demonstrates a plane (ba), starting in flight, that lands in Heathrow airport and then takes off again. The plane receives clear to land and takeoff messages before landing and taking-off. Bad weather is randomly generated and has a 20% chance of occurring. When the weather is very bad, no landings or takeoffs can be made and any attempts will prompt an alert to the browser window. Try to land or takeoff again.

```
heathrow = new Airport();
Airport {hangar: Array(0)}

ba = new Plane('BA001');
Plane {name: "BA001", planeAction: "", planeStatus: "flying"}

heathrow._clearToLand(ba);
true

ba.land(heathrow);
undefined

heathrow.hangar;
[Plane]0: Plane {name: "BA001", planeAction: "", planeStatus: "landed"}length: 1__proto__: Array(0)

heathrow._clearToTakeoff(ba);
true

ba.takeoff(heathrow);
undefined

ba;
Plane {name: "BA001", planeAction: "", planeStatus: "flying"}

heathrow.hangar;
[]
```

### Improvements

* Create alerts if a plane tries to land when already landed or takeoff when already flying.
* Implement a maximum capacity at the airport so planes can not land if full.
