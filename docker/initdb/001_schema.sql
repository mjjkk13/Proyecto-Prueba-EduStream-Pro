CREATE SCHEMA IF NOT EXISTS edustream AUTHORIZATION postgres;
ALTER DATABASE edustream SET search_path TO edustream, public;
SET search_path TO edustream;

-- Roles
CREATE TABLE IF NOT EXISTS rol (
  id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nombre      VARCHAR(100) UNIQUE NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
  id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nombre      VARCHAR(50)  NOT NULL,
  email       VARCHAR(100) UNIQUE NOT NULL,
  password    VARCHAR(255) NOT NULL,
  rol_id      INT NULL,
  registro    TIMESTAMP DEFAULT CURRENT_DATE,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_usuarios_rol
    FOREIGN KEY (rol_id) REFERENCES rol(id)
    ON DELETE SET NULL
);

-- Cursos
CREATE TABLE IF NOT EXISTS cursos (
  id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nombre      VARCHAR(100) NOT NULL,
  descripcion TEXT,
  admin_id    INT NULL, -- admin (usuario)
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_cursos_admin
    FOREIGN KEY (admin_id) REFERENCES usuarios(id)
    ON DELETE SET NULL
);

-- Inscripciones
CREATE TABLE IF NOT EXISTS inscripciones (
  id                 INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  usuarios_id        INT NOT NULL,
  curso_id           INT NOT NULL,
  admin_id           INT NULL, -- quien gestionó (usuario)
  fecha_inscripcion  TIMESTAMP DEFAULT CURRENT_DATE,
  estado             VARCHAR(50) DEFAULT 'activo',
  created_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_inscripciones_usuario
    FOREIGN KEY (usuarios_id) REFERENCES usuarios(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_inscripciones_curso
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_inscripciones_admin
    FOREIGN KEY (admin_id) REFERENCES usuarios(id)
    ON DELETE SET NULL
);

-- Permisos (si en algún momento hay otros roles)
GRANT USAGE ON SCHEMA edustream TO postgres;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA edustream TO postgres;
ALTER DEFAULT PRIVILEGES IN SCHEMA edustream GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO postgres;
