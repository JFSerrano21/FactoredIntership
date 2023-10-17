from sqlalchemy import create_engine, ForeignKey, Column, String, Integer, CHAR 
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


Base = declarative_base()

class Person(Base):
    __tablename__ = "people"
    id: Column("id", Integer, primary_key = True)
    name: Column("name", String)
    position: Column("position", String)
    avatarurl: Column("avatarurl", String)

    def __init__(self, id, name, position, avatarurl):
        self.id = id
        self.name =name
        self.position = position
        self.avatarurl = avatarurl

    def __repr__(self):
        return f"({self.id}) {self.name} {self.position} {self.avatarurl}"
    
engine = create_engine("sqllite:///mydb.db", echo = True)
Base.metadata.createall(bind = engine)

Session = sessionmaker(bind = engine)
session = Session()

person = Person(1, "jake", "developer", "url.com")
session.add(person)
session.commit()


