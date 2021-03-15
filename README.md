# p2a

- vue3
- protobufjs

## why

苦 grpc-web 久已，此工具搭配 [gRPC-JSON transcoder](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/grpc_json_transcoder_filter) 助您回归 RESTful + json

bye bye grpc-web

## proto to any demo

- [https://proto2dart.surge.sh](https://proto2dart.surge.sh)
- [https://proto2ts.surge.sh](https://proto2ts.surge.sh)

from

```proto
syntax = "proto3";
message Human {
  string name = 1;
  string sex = 2;
  Head head = 3;
  Body body = 4;
  SkinEnum skinEnum = 5;
  repeated string collections = 6;
}
enum SkinEnum {
  WHITE = 0;
  BLACK = 1;
  YELLOW = 2;
  BROWN = 3;
}
message Head {
  double iq =  1;
}
message Body {
  double height = 1;
  double weight = 2;
}
message Foot {
  bool isShort = 1;
}
```

to ts

```ts
export interface Human {
  name: string;
  sex: string;
  head: Head;
  body: Body;
  skinEnum: string;
  collections: string[];
}

export interface Head {
  iq: number;
}

export interface Body {
  height: number;
  weight: number;
}

export interface Foot {
  isShort: boolean;
}
```

to dart with [JSON and serialization
](https://flutter.dev/docs/development/data-and-backend/json)

```dart
@JsonSerializable()
class Human {
  String name;
  String sex;
  Head head;
  Body body;
  String skinEnum;
  List<String> collections;

  Human({ this.name, this.sex, this.head, this.body, this.skinEnum, this.collections, });

  factory Human.fromJson(Map<String, dynamic> json) => _$HumanFromJson(json);

  Map<String, dynamic> toJson() => _$HumanToJson(this);
}


class SkinEnum {
  static const String WHITE =  'WHITE';
  static const String BLACK =  'BLACK';
  static const String YELLOW =  'YELLOW';
  static const String BROWN =  'BROWN';
}

@JsonSerializable()
class Head {
  double iq;

  Head({ this.iq, });

  factory Head.fromJson(Map<String, dynamic> json) => _$HeadFromJson(json);

  Map<String, dynamic> toJson() => _$HeadToJson(this);
}


@JsonSerializable()
class Body {
  double height;
  double weight;

  Body({ this.height, this.weight, });

  factory Body.fromJson(Map<String, dynamic> json) => _$BodyFromJson(json);

  Map<String, dynamic> toJson() => _$BodyToJson(this);
}


@JsonSerializable()
class Foot {
  bool isShort;

  Foot({ this.isShort, });

  factory Foot.fromJson(Map<String, dynamic> json) => _$FootFromJson(json);

  Map<String, dynamic> toJson() => _$FootToJson(this);
}



```

## json to any demo

if you want convert json to dart/ts

> https://github.com/11os/j2a

## usage

```sh
$ yarn # Project setup
$ yarn serve # Compiles and hot-reloads for development
$ yarn build # Compiles and minifies for production
$ yarn lint # Lints and fixes files
```
