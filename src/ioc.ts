import {Controller} from 'tsoa';
import {Container, decorate, inject, injectable, interfaces} from 'inversify';
import {autoProvide, makeFluentProvideDecorator, makeProvideDecorator} from 'inversify-binding-decorators';
import 'reflect-metadata';

decorate(injectable(), Controller);

type Identifier = string | symbol | interfaces.Newable<any> | interfaces.Abstract<any>;

const iocContainer = new Container();

const provide = makeProvideDecorator(iocContainer);
const fluentProvider = makeFluentProvideDecorator(iocContainer);

const ProvideNamed = (identifier: Identifier, name: string) => fluentProvider(identifier).whenTargetNamed(name).done();

const ProvideSingleton = (identifier: Identifier) => fluentProvider(identifier).inSingletonScope().done();

export {iocContainer, autoProvide, provide, ProvideSingleton, ProvideNamed, inject, decorate, injectable};
