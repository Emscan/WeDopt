class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.column :username, :string, null: false
    	t.column :email, :string, null: false
    	t.column :admin, :boolean, default: false
    	t.column :password_digest, :string, null: false
    	t.timestamps null: false
    	t.index :username
    	t.index :email
    	t.index :password_digest
    end
  end
end
