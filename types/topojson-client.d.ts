declare module 'topojson-client' {
  import type { Topology, GeometryCollection, GeometryObject } from 'topojson-specification';

  export function feature<T extends GeometryObject>(
    topology: Topology,
    object: T
  ): GeoJSON.FeatureCollection<GeoJSON.GeometryObject>;

  export function mesh(
    topology: Topology,
    object?: GeometryObject,
    filter?: (a: any, b: any) => boolean
  ): GeoJSON.MultiLineString;

  export function meshArcs(
    topology: Topology,
    object?: GeometryObject,
    filter?: (a: any, b: any) => boolean
  ): number[][];

  export function merge(
    topology: Topology,
    objects: GeometryObject[]
  ): GeoJSON.MultiPolygon;

  export function mergeArcs(
    topology: Topology,
    objects: GeometryObject[]
  ): number[][];
}
