class CreateJobs < ActiveRecord::Migration[7.1]
  def change
    create_table :jobs do |t|
      t.string :category
      t.integer :salary
      t.string :title

      t.timestamps
    end
  end
end
