import { Consulta } from './domain/Consulta';
import { Triagem } from './domain/Triagem';
import { Sexo } from './domain/Sexo';
import { Especialidade } from './domain/Especialidade';
import { Municipio } from './domain/Municipio';
import { Estado } from './domain/Estado';
import { Paciente } from './domain/Paciente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from './domain/Medico';
import { Pais } from './domain/Pais';
import { StatusSaude } from './domain/StatusSaude';
import { Medicamento } from './domain/Medicamento';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ComumServiceService {

  API  = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public getPaciente(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>('http://localhost:8080/api/paciente');
  }

  public getPacienteEmAtendimento(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>('http://localhost:8080/api/paciente/emAtendimento');
  }

  public getMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>('http://localhost:8080/api/medico');
  }

  public getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>('http://localhost:8080/api/estado');
  }

  public getMunicipios(): Observable<Municipio[]> {
    return this.http.get<Municipio[]>('http://localhost:8080/api/municipio');
  }

  public getEspecilalidade(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>('http://localhost:8080/api/especialidade');
  }

  public getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>('http://localhost:8080/api/pais');
  }

  public getSexo(): Observable<Sexo[]> {
    return this.http.get<Sexo[]>('http://localhost:8080/api/sexo');
  }

  public getStatus(): Observable<StatusSaude[]> {
    return this.http.get<StatusSaude[]>('http://localhost:8080/api/statusSaude');
  }

  public getMedicamento(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>('http://localhost:8080/api/medicamento');
  }

  public cadastrarTriagem(triagem: Triagem): Observable<Triagem> {
    console.log('Codigo ' + triagem.id);
    console.log('Altura ' + triagem.altura);
    console.log('peso ' + triagem.peso);
    console.log('descrcao ' + triagem.descricao);
    return this.http.post<Triagem>('http://localhost:8080/api/triagem', triagem);
  }

  public cadastrar(medicamento: Medicamento): Observable<Medicamento> {
    console.log('Codigo ' + medicamento.id);
    console.log('Nome ' + medicamento.nome);
    console.log('Quantidade ' + medicamento.quantidade);
    console.log('Descricao ' + medicamento.descricao);
    return this.http.post<Medicamento>('http://localhost:8080/api/medicamento', medicamento, httpOptions);
  }

  public getPacientePorCPF(paciente: Paciente) {
    return this.http.post('http://localhost:8080/api/paciente/cpf', paciente.cpf);
  }

  public cadastrarPaciente(paciente: Paciente) {
    return this.http.post('http://localhost:8080/api/paciente', paciente);
  }

  public cadastrarConsulta(consulta: Consulta) {
    return this.http.post('http://localhost:8080/api/consulta', consulta);
  }
}
