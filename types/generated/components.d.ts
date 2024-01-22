import type { Schema, Attribute } from '@strapi/strapi';

export interface HistorialClinicoDiagnosticoPrincipal extends Schema.Component {
  collectionName: 'components_historial_clinico_diagnostico_principals';
  info: {
    displayName: 'Diagnostico principal';
  };
  attributes: {
    descripcion: Attribute.String;
    codigo: Attribute.String;
  };
}

export interface HistorialClinicoIngreso extends Schema.Component {
  collectionName: 'components_historial_clinico_ingresos';
  info: {
    displayName: 'ingreso';
    icon: 'calendar';
  };
  attributes: {
    fecha: Attribute.Date;
    hora: Attribute.Time;
    servicio: Attribute.String;
    sala: Attribute.String;
    cama: Attribute.String;
  };
}

export interface HistorialClinicoMedicoQueOrdenoLaInternacion
  extends Schema.Component {
  collectionName: 'components_historial_clinico_medico_que_ordeno_la_internacions';
  info: {
    displayName: 'Medico que ordeno la internacion';
  };
  attributes: {
    dr: Attribute.String;
    matricula: Attribute.String;
  };
}

export interface HistorialClinicoOperaciones extends Schema.Component {
  collectionName: 'components_historial_clinico_operaciones';
  info: {
    displayName: 'Operaciones';
  };
  attributes: {
    descripcion: Attribute.String;
    codigo: Attribute.String;
  };
}

export interface HistorialClinicoOtrosDiagnosticos extends Schema.Component {
  collectionName: 'components_historial_clinico_otros_diagnosticos';
  info: {
    displayName: 'Otros diagnosticos';
  };
  attributes: {
    descripcion: Attribute.String;
    codigo: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'historial-clinico.diagnostico-principal': HistorialClinicoDiagnosticoPrincipal;
      'historial-clinico.ingreso': HistorialClinicoIngreso;
      'historial-clinico.medico-que-ordeno-la-internacion': HistorialClinicoMedicoQueOrdenoLaInternacion;
      'historial-clinico.operaciones': HistorialClinicoOperaciones;
      'historial-clinico.otros-diagnosticos': HistorialClinicoOtrosDiagnosticos;
    }
  }
}
