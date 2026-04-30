class Job < ApplicationRecord
    validates :category, presence: true
    validates :title, presence: true
    validates :salary, presence: true, numericality: { greater_than: 0 }
end
