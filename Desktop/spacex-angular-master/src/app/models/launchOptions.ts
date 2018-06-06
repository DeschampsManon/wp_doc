export enum Order {
  asc  = "asc",
  desc = "desc"
}

export interface LaunchOptions {
  /* Use true to show mongo document id's */
  id?: Boolean
  /* Filter launches by mongo document id */
  flight_id?: Number
  /* Change result ordering by asc or desc */
  order?: String
  /* Filter by a date range */
  start?: Date
  /* Filter by a date range */
  final?: Date
  /* Filter by flight number */
  flight_number?: Number
  /* Filter by year */
  launch_year?: Number
  /* 	Filter by UTC timestamp */
  launch_date_utc?: String
  /* Filter by local ISO timestamp */
  launch_date_local?: String
  /* Filter by rocket id */
  rocket_id?: Number
  /* Filter by rocket name */
  rocket_name?: String
  /* Filter by rocket type */
  rocket_type?: String
  /* Filter by core serial # */
  core_serial?: String
  /* Filter by dragon capsule serial # */
  cap_serial?: String
  /* Filter by core flight number */
  core_flight?: Number
  /* Filter by core block number */
  block?: Number
  /* Filter by core reusability */
  core_reuse?: String
  /* Filter by Falcon Heavy side core 1 reuse */
  side_core1_reuse?: String
  /* Filter by Falcon Heavy side core 2 reuse */
  side_core2_reuse?: String
  /* Filter by fairing reuse */
  fairings_reuse?: String
  /* Filter by dragon capsule reuse */
  capsule_reuse?: String
  /* Filter by launch site id */
  site_id?: Number
  /* Filter by launch site name */
  site_name?: String
  /* Filter by long launch site name */
  site_name_long?: String
  /* Filter by payload id */
  payload_id?: Number
  /* Filter by launch customer */
  customer?: String
  /* Filter by payload type */
  payload_type?: String
  /* Filter by payload orbit */
  orbit?: String
  /* Filter by successful launches */
  launch_success?: String
  /* Filter by launches with reused cores */
  reused?: String
  /* Filter by sucessful core landings */
  land_success?: String
  /* Filter by landing method */
  landing_type?: String
  /* Filter by landing vehicle */
  landing_vehicle?: String
}
