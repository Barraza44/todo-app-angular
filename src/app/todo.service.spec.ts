import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoServiceService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a Todos array ',() => {
    let todos = service.getTodos();
    expect(typeof todos).toBe('object');
  });
});
